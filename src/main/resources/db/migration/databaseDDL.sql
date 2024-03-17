-- Database: bookstore_management_system_db

-- DROP DATABASE IF EXISTS bookstore_management_system_db;

CREATE DATABASE bookstore_management_system_db
    WITH
    OWNER = testadmin
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT TEMPORARY, CONNECT ON DATABASE bookstore_management_system_db TO PUBLIC;

GRANT ALL ON DATABASE bookstore_management_system_db TO testadmin WITH GRANT OPTION;

GRANT ALL ON DATABASE bookstore_management_system_db TO testuser;