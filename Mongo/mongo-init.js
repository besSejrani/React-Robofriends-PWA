print(
  "Start #################################################################"
);

// Production
db = db.getSiblingDB("api_prod_db");
db.createCollection("users");
db.createUser({
  user: "root",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "api_prod_db" }],
});

print("END #################################################################");
