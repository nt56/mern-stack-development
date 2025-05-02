

Product

p_id
p_name
p_category
p_price
p_qty
p_brand
p_offer_price
p_details


Create table product(
    p_id INT PRIMARY KEY AUTO_INCREMENT,
    p_name varchar(200),
    p_category varchar(200),
    p_price int,
    p_qty int,
    p_brand VARCHAR(100),
    p_offer_price VARCHAR(100),
    p_details TEXT
);



insert into product(p_name,p_category,p_price,p_qty,p_brand,p_offer_price,p_details) 
             values ("Laptop","Electronics",49999,10,"Apple","45999","RAM:8GB, ROM: 1TB"),
                    ("Laptop","Electronics",49999,10,"Apple","45999","RAM:8GB, ROM: 1TB"),


INSERT INTO product(p_name, p_category, p_price, p_qty, p_brand, p_offer_price, p_details) 
VALUES 
("Laptop", "Electronics", 49999, 10, "Apple", 45999, "RAM:8GB, ROM:1TB"),
("Smartphone", "Electronics", 29999, 25, "Samsung", 27999, "RAM:6GB, ROM:128GB, Camera: 64MP"),
("Washing Machine", "Home Appliances", 18999, 8, "LG", 17499, "Capacity:6.5kg, Type:Front Load"),
("Bluetooth Speaker", "Electronics", 3999, 50, "JBL", 3499, "Battery:12hrs, Waterproof"),
("LED TV", "Electronics", 39999, 5, "Sony", 36999, "Size:43inch, Resolution:4K UHD"),
("Microwave Oven", "Home Appliances", 9999, 12, "Samsung", 8999, "Capacity:28L, Type:Convection"),
("Headphones", "Electronics", 2499, 30, "Boat", 2199, "Type:Wireless, Noise Cancellation"),
("Refrigerator", "Home Appliances", 29999, 7, "Whirlpool", 27999, "Capacity:245L, Type:Double Door"),
("Tablet", "Electronics", 19999, 15, "Lenovo", 17999, "RAM:4GB, ROM:64GB, Screen:10.1inch"),
("Smartwatch", "Electronics", 7999, 20, "Realme", 6999, "Display:AMOLED, Battery:7 days");







# Clauses



# WHERE-  used for data filter data by passing conditions;

select * from table_name where condition



# ORDER BY

select * from student order by stud_id;
or
select * from student order by stud_id ASC;

select * from student order by stud_id desc;

# Where  Clause
 select * from emp where emp_address="Pune" order by emp_ctc desc;



# LIMIT

Used to set limit 

Select * from emp limit 3;

select * from emp where emp_address="Pune" limit 3;


select * from student where student_mobile="9876543210" LIMIT 3;




# combine both order by and Limit

select * from emp where emp_address="Pune" order by emp_ctc desc limit 2;

> select * customers where cust_address="Pune"  AND cust_age>=25 ORDER BY cust_age LIMIT 3;

# LIKE

Used for data matching;

%a - ending with a
a%- starts with a
%a%- anywhere with a

Select * from student where stud_name like "%a"; - ending with a
Select * from student where stud_name like "a%"; - starting with a
Select * from student where stud_name like "%a% - any where with a



# BETWEEN

Range

select * from Product where p_price BETWEEN 25000 AND 50000;


SELECT OrderID, OrderDate, CustomerID
FROM Orders
WHERE OrderDate BETWEEN '2025-02-20' AND '2025-02-28';



# AND OR

select * from Product where p_price>25000 AND p_Price<50000;

 select * from Product where p_price>=25000 AND p_Price<=50000;


# Clauses

👉Having
👉Group By;






select p_category, COUNT(*) from product GROUP BY p_category;




*********************************


# Joins


Used to conncet with one or more tables;

customer table- cust_id, cust_name,cust_email, cust_address,cust_mobile

order table- order_id order_name order_price order_catgeory cust_id 


Dept_table

dep_id dept_name

1        IT
4        Sales
3        HR
2        Admin




emp table

emp_id emp_name dep_id

1       John      1
2       Peter     2


Types of Join




Inner Join - fetch common data from both table
LEFT JOIN (LEFT Outer JOIN)- fetch all data from left table and match data from another table
RIGHT JOIN (RIGHT Outer JOIN) -
FULL Outer JOIN- Fetch all data from both table



cross join
natural join

syntax

Join clause



INNER JOIN

select * from employee INNER JOIN dept on employee.emp_id=dept.dept_id;


 select * from employee INNER JOIN dept on employee.emp_id=dept.dept_id;




