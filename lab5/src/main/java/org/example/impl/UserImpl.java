package org.example.impl;

import org.example.config.HibernateSession;
import org.example.config.HibernateTransaction;
import org.example.entity.User;
import org.hibernate.Session;
import org.example.utils.HqlQuery;

import java.util.List;

public class UserImpl {
    Session session;
    User user;
    HibernateTransaction transaction;

    public UserImpl() {
    }

    public UserImpl(Session session, User user, HibernateTransaction transaction) {
        this.session = session;
        this.user = user;
        this.transaction = transaction;
    }

    public void add() {
        transaction.startTransaction();
        session.save(user);
        transaction.commitTransaction();
        session.close();
    }

    List<User> allOrdersToList() {
        session = new HibernateSession(User.class).createSession();
        List<User> clientList = session.createQuery(HqlQuery.selectFromClient, User.class).list();
        session.close();
        return clientList;
    }

    public void selectAll() {
        session = new HibernateSession(User.class).createSession();
        System.out.println("Users list:\n--------------------");
        allOrdersToList().forEach(System.out::println);
        session.close();
    }
}
