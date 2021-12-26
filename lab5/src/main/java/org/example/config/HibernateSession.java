package org.example.config;

import org.hibernate.Session;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public final class HibernateSession {
    private final Class<?> clazz;

    public HibernateSession(Class<?> clazz) {
        this.clazz = clazz;
    }

    public Session createSession() {
        return HibernateConfiguration.configuration(clazz)
                .buildSessionFactory(new StandardServiceRegistryBuilder()
                        .applySettings(HibernateProperties.generateProperties())
                        .build())
                .openSession();
    }
}
