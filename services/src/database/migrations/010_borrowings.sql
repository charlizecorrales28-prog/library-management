CREATE TABLE borrowings (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    student_id BIGINT UNSIGNED NOT NULL,
    book_copy_id BIGINT UNSIGNED NOT NULL,
    borrowed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    due_at DATETIME NOT NULL,
    status ENUM(
        'Borrowed',
        'Returned',
        'Overdue',
        'Lost'
    ) NOT NULL DEFAULT 'Borrowed',
    remarks VARCHAR(255) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    KEY idx_borrowings_student_id (student_id),
    KEY idx_borrowings_book_copy_id (book_copy_id),
    KEY idx_borrowings_status (status),
    KEY idx_borrowings_due_at (due_at),

    CONSTRAINT fk_borrowings_student
        FOREIGN KEY (student_id)
        REFERENCES students(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_borrowings_book_copy
        FOREIGN KEY (book_copy_id)
        REFERENCES book_copies(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;