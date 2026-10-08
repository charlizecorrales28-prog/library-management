CREATE TABLE fines (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    borrowing_id BIGINT UNSIGNED NOT NULL,
    amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    reason VARCHAR(255) NOT NULL,
    status ENUM(
        'Unpaid',
        'Paid',
        'Waived'
    ) NOT NULL DEFAULT 'Unpaid',
    paid_at DATETIME NULL,
    remarks VARCHAR(255) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    KEY idx_fines_borrowing_id (borrowing_id),
    KEY idx_fines_status (status),

    CONSTRAINT fk_fines_borrowing
        FOREIGN KEY (borrowing_id)
        REFERENCES borrowings(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;