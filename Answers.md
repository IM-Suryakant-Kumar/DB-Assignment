## Questions

![](https://raw.githubusercontent.com/iAmritMalviya/DB-Assignment/main/product-management-ecommerce-table-.webp)

1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
3. Create schema in any Database script or any ORM (Object Relational Mapping).

## Answers

1. "Product" and "Product_Category" are separate collections. "Product" contains a "category_id" that point to the "id" of "Product_category" that diffrentiate "Product" with other "Product"
2. We can ensure that by checking if any document's "id" of Product_category collection match to the "category_id"