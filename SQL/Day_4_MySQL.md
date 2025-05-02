


Table- Emp

emp_id
emp_name
emp_email
emp_role
emp_ctc
emp_address
emp_joining_date



Create table Emp(

emp_id int,
emp_name varchar(50),
emp_email varchar(100),
emp_role varchar(100),
emp_ctc varchar(100),
emp_address text,
emp_joining_date date

);



insert into Emp(emp_id,emp_name,emp_email,emp_role,emp_ctc,emp_address,emp_joining_date) values(5,"E","e@gmail.com","Developer","10","Pune","2025-02-27");


# Aggregate Functions;

Perform calculation / operations on a table 
An aggregate function is a function that performs a calculation on a set of values, and returns a single value.


COUNT() - returns the number of rows in a set
MIN() - returns the smallest value within the selected column
MAX() - returns the largest value within the selected column
SUM() - returns the total sum of a numerical column
AVG() - returns the average value of a numerical column




# count

select Count(col_name) from table_name;

select Count(emp_ctc) from emp;


# Apply where clause
select COUNT(emp_ctc) from emp where emp_ctc="15";

*************************
# min
# max

select min(emp_ctc) from emp;
select max(emp_ctc) from emp;


# Apply Where clause
select min(emp_ctc) from emp where emp_address="Nashik"
select max(emp_ctc) from emp where emp_address="Nashik"

****************************

# sum

select SUM(emp_ctc) from emp;

# Apply Where clause
select Sum(emp_ctc) from emp where emp_address="pune";

*************************

# Avg

Select Avg(emp_ctc) from emp;

# Apply Where clause

select avg(emp_ctc) from emp  where emp_address="nashik";

*************************

Alias - change column name

select Sum(emp_ctc) As EMP_Total_CTC from emp;


****************************************************************

# Constraints



# Primary KEY-


Unique identifier for each row
Can't be NULL
must be unique. Additionally, a primary key column cannot contain NULL.

# Foreign Key - Is a primary key of a another table

# NOT NULL - Must be there i.e Not empty

# Unique- Cant be repeat eg email, 
Used  when primary key is absent

eg

CREATE TABLE Students(

    stud_id INT PRIMARY KEY AUTO_INCREMENT,
    stud_name VARCHAR(100),
    stud_email VARCHAR(200) NOT NULL UNIQUE,
    stud_mobile VARCHAR(20) NOT NULL
);






# DISTINCT

The DISTINCT keyword in SQL is used to retrieve unique values from a column or combination of columns.
It removes duplicate rows from the result set.


select DISTINCT(emp_role) from table_name;







****************************************************************************************



Eg

Create Table Order(order_id INT PRIMARY KEY AUTO_INCREMENT,order_category varchar(200) NOT NULL UNIQUE, )

Create Table emp(
emp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
emp_email varchar(255) NOT NULL UNIQUE,
emp_role varchar(100) )


Insert

insert into emp(emp_name,emp_role) values('John Peter','Software Developer');

******

# Dept Table

Dept_id      Dept_name 
1            Sales / Marketing
2            IT
3            HR


# Emp

Used Dep_id in emp i.e Foreign key

emp_id emp_name Dep_id
1        John    2

**************

# AUTO_INCREMENT


****************************************************************************************

# Alter PRIMARY KEY

👉Add

Alter table table_name Add column_name int PRIMARY KEY;

eg
 ALter table student add stud_id INT PRIMARY KEY AUTO_INCREMENT;

👉Drop column

Alter table table_name drop column_name;


****************************************************************
