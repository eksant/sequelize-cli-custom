# sequelize-cli-custom
The Custom Sequelize Command Line Interface (CLI-Custom)  
Custom version 3.1.0.1 - 10th, Dec 2017  
- Remove classMethods: associate at models
- Custom attributes to exclude createAt and updateAt

## Table of Contents  
[Instalasi](#instalasi)  
[Pemakaian](#pemakaian)    

<a name="instalasi"/>

## Instalasi

### Global  
Install CLI global dengan cara
```no-highlight
1. Install master sequelize-cli melalui terminal :
   $ npm install -g sequelize-cli
2. Kemudian extract dan replace all file node_modules.zip ke direktori usr/lib
```  

### Lokal  
Install CLI lokal dengan cara
```no-highlight
1. Install master sequelize-cli melalui terminal :
   $ npm install --save sequelize-cli
2. Kemudian extract dan replace all file node_modules.zip ke direktori project_Anda
```  

<a name="pemakaian"/>

## Pemakaian

### Contoh Standar Sequelize
```no-highlight
sequelize model:create --name Table_One --attributes column:string
```
Secara default, hasil generate sequelize-cli akan menghapus classMethods: associate di models
![sequelize](https://user-images.githubusercontent.com/32409305/33798231-7310510e-dd47-11e7-9082-66ecae6c89d3.png)

### Contoh Tanpa Column createdAt
```no-highlight
sequelize model:create --name Table_Two --attributes column:string --customs nocreatedat
```
Hasil generate sequelize-cli akan menghapus kolom createdAt di migrations
![sequelize-nocreatedat](https://user-images.githubusercontent.com/32409305/33798827-732582d0-dd52-11e7-8b21-6d57858f8c78.png)

### Contoh Tanpa Column updatedAt
```no-highlight
sequelize model:create --name Table_Three --attributes column:string --customs noupdatedat
```
Hasil generate sequelize-cli akan menghapus kolom updatedAt di migrations
![sequelize-noupdatedat](https://user-images.githubusercontent.com/32409305/33798828-7672fb66-dd52-11e7-9d0f-ca7ebba3e6d4.png)

### Contoh Tanpa Column createdAt dan updatedAt
```no-highlight
sequelize model:create --name Table_Three --attributes column:string --customs nocreatedat,noupdatedat
```
Hasil generate sequelize-cli akan menghapus kolom createdAt dan updatedAt di migrations
![sequelize-nocreatedat-noupdatedat](https://user-images.githubusercontent.com/32409305/33798830-796d1586-dd52-11e7-8a5e-612244015354.png)


---

Contribution : Eksa  
Email : [eksant@gmail.com](http://mailto:eksant@gmail.com)
