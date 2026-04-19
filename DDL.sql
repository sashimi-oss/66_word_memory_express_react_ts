DROP TABLE IF EXISTS famous_word;
DROP TABLE IF EXISTS english_sentence;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name varchar(30) not null,
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    is_delete boolean default false not null
);

create table famous_word (
    famous_word_id serial primary key,
    user_id int,
    word varchar(50) not null,
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    is_delete boolean default false not null
);

CREATE TABLE english_sentence (
    eng_sent_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    eng_sent TEXT NOT NULL,
    ja_sent TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_delete BOOLEAN DEFAULT FALSE NOT NULL
);


ALTER TABLE english_sentence
ADD CONSTRAINT fk_english_sentence_user
FOREIGN KEY (user_id)
REFERENCES users(user_id)
ON DELETE CASCADE;

CREATE INDEX idx_english_sentence_user_id
ON english_sentence(user_id);