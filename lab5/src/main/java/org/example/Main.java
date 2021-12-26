package org.example;

import org.example.config.HibernateSession;
import org.example.config.HibernateTransaction;
import org.example.entity.User;
import org.example.impl.UserImpl;
import org.hibernate.Session;

import java.util.Scanner;

public class Main {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        menu();
    }

    private static void menu() {
       Session session = new HibernateSession(User.class).createSession();
       HibernateTransaction transaction = new HibernateTransaction(session);
        System.out.print("MENU:\nADD NEW USER (1)\nSHOW ALL USERS (2)\nEXIT (0)\n-> ");
        switch (scanner.nextLine()) {
            case "1":
                User user = new User();
                System.out.print("INSERT USERNAME: ");
                user.setUsername(scanner.nextLine());
                System.out.print("INSERT PASSWORD: ");
                user.setPassword(scanner.nextLine());
                new UserImpl(session, user, transaction).add();
                menu();
                break;
            case "2":
                new UserImpl().selectAll();
                menu();
                break;
            default:
                System.out.println("Menu action with entered number does not exists! Try again!");
                menu();
                break;
        }
    }
}
