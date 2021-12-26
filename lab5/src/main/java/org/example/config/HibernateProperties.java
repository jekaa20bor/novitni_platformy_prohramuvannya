package org.example.config;

import org.hibernate.cfg.AvailableSettings;
import org.hibernate.dialect.H2Dialect;

import java.util.Properties;

public final class HibernateProperties {
    private HibernateProperties() {
    }

    public static Properties generateProperties() {
        Properties properties = new Properties();
        properties.put(AvailableSettings.URL, "jdbc:h2:tcp://localhost/~/H2/databases/db");
        properties.put(AvailableSettings.USER, "root");
        properties.put(AvailableSettings.PASS, "root");
        properties.put(AvailableSettings.DIALECT, H2Dialect.class.getName());
        properties.put(AvailableSettings.SHOW_SQL, "true");
        properties.put(AvailableSettings.HBM2DDL_AUTO, "update");
        return properties;
    }
}
