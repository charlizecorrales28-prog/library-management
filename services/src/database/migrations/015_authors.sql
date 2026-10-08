CREATE TABLE authors (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    author_name VARCHAR(255) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY uq_authors_author_name (author_name)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;