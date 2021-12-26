package org.example.config;

public final class HibernateConfiguration {
    private HibernateConfiguration() {
    }

    public static org.hibernate.cfg.Configuration configuration(Class<?> cl) {
        org.hibernate.cfg.Configuration configuration = new org.hibernate.cfg.Configuration();
        configuration.addAnnotatedClass(cl);
        return configuration;
    }
}

