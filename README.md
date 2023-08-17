# ANG16


>>> dotnet --version
7.0.400

>> node -v
v18.17.1

>>> ng v
14.2.12

if not have latest install
>>> npm install -g @angular/cli@latest

## Creating web project

>>> ng new PMS.UI
>>> cd PMS.UI
>>>code .

>>>ng build
>>> ng serve -o


------------------------------------

Create .Net Core WebAPI Empty Project
open appsettings.json
add 
"ConnectionStrings": {
    "PMSDbConnectionString": "server=servername;database=PMSDb;user id=sa;Password=123456;Trusted_Connection=True;TrustedServerCertificate=False",
    //"PMSDbConnectionString": "Server=servername;Database=PMSDb;user id=sa;Password=123456;Encrypt=False"
}


------------------------------------------
Add Class in Models

 public class Product
 {
     public Guid Id { get; set; }
     public string? Name { get; set; }
     public string? Type { get; set; }
     public string? Color { get; set; }
     public decimal Price { get; set; }
 }

>>> Add-Migration
>>> update database
Note: Database created in SQL server with PMSDb
