-- waiting...

SELECT * FROM users WHERE age BETWEEN 20 AND 30;

-- ALIAS AS AND CONCAT
SELECT CONCAT(name, surname) FROM users;

-- GROUP BY
SELECT MAX(age) FROM users GROUP BY age;

-- Conditional
SELECT COUNT(age), age FROM users WHERE age > 16 GROUP BY age ORDER BY age;

--HAVING
SELECT COUNT(age) FROM users HAVING COUNT(age) > 0;