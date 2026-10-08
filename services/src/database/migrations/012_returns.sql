CREATE TABLE returns (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    borrowing_id BIGINT UNSIGNED NOT NULL,
    returned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    condition_status ENUM(
        'Good',
        'Fair',
        'Poor',
        'Damaged',
        'Lost'
    ) NOT NULL DEFAULT 'Good',
    remarks VARCHAR(255) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    UNIQUE KEY uq_returns_borrowing_id (borrowing_id),

    CONSTRAINT fk_returns_borrowing
        FOREIGN KEY (borrowing_id)
        REFERENCES borrowings(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;