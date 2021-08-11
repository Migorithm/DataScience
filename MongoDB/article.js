//1. To create text index
db.chat.createIndex({"title":"text",
                        "body":"text"},
                        {"weights":{
                            "title":3,
                            "body":2}})

//unlike other multikey index, it is considered equally important regardless of order.
//To give an weight, you use "weights" 



//2. in case you don't know what fields you're going to use,

db.chat.createIndex({"$**":"text"})  //this essentially means "any fields with text"




db.chat.insertMany([{"name":"Migo","body":"야 뭐해"},
                    {"name":"Chan","body":"그냥 있지"},
                    {"name":"Migo","body":"심심한데 농구 한판?"},
                    {"name":"Chan","body":"응 아니~ 농구할 기분 아니야~"}])

db.chat.insertMany([{"name":"Migo","body":"hey whatcha doing huh?"},
                    {"name":"Chan","body":"just took a nap, not much really"},
                    {"name":"Migo","body":"wanna grab some pizza?"},
                    {"name":"Chan","body":"No, I'm good. Thank you though."}])

db.chat.insertMany([{"name":"Migo","body":"You gotta go out and get some fresh air as well..."},
                    {"name":"Chan","body":"I know what you mean, but it just happens that I barely have time."},
                    {"name":"Migo","body":"Okay cool. Let me know if you want me some bring food then."}])


//3 search
db.chat.find({"$text":{"$search":"\"농구 한판\""}})


db.chat.find({"$text":{"$search":"\"some\""}},{"score":{"$meta":"textScore"}})

db.blog.createIndex({"date":1,"post":"text"})


db.users.createIndex({"profile":"text", "interest":"text"},{"default_language":"french"})

db.users.insertOne({"username":"Chare", langauge:"swedish"})