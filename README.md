# NodePostgreSQL
Restful API with Node, Express and Postgres

Clone the repository and follow the below

#Postgress Schema Script : Connect the database via pg Admin and run below script

CREATE TABLE public.profiles
(
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    fullname character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default",
    createdon date,
    modifiedon date,
    isactive bit(1),
    CONSTRAINT profiles_pkey PRIMARY KEY (id)
)

#API
From command prompt - npm start
Access the API via - http://localhost:3000


#API endpoints

GET endpoints - Get Profiles
http://localhost:3000/profile
http://localhost:3000/profile/1

POST endpoint - Create Profile
http://localhost:3000/profile
Body : {
    "fullname": "James Bond",
    "email": "bond@007.com"
}

PUT endpoint - Update Profile
http://localhost:3000/profile
Body : {
    "id":"1"
    "fullname": "James Bond",
    "email": "james.bond@007.com",
    "isactive":"1"
}

DELETE endpoint - Delete Profile
http://localhost:3000/profile/1