CREATE TABLE book_copies (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    book_id BIGINT UNSIGNED NOT NULL,
    accession_number VARCHAR(50) NOT NULL,
    barcode VARCHAR(100) NULL,
    status ENUM(
        'Available',
        'Borrowed',
        'Reserved',
        'Maintenance',
        'Lost',
        'Damaged'
    ) NOT NULL DEFAULT 'Available',
    condition_status ENUM(
        'Good',
        'Fair',
        'Poor',
        'Damaged'
    ) NOT NULL DEFAULT 'Good',
    acquired_at DATE NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    UNIQUE KEY uq_book_copies_accession_number (accession_number),
    UNIQUE KEY uq_book_copies_barcode (barcode),

    KEY idx_book_copies_book_id (book_id),
    KEY idx_book_copies_status (status),

    CONSTRAINT fk_book_copies_book
        FOREIGN KEY (book_id)
        REFERENCES books(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;