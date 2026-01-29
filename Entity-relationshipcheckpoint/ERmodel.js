 //my entity relashionship model has 4 entities: gymnasiums,member,session, coachs.
 //1-Gymnasium: This entity represents the different gymnasiums that the system supports. 
//it has attributes such as name, address, and telephone number.
//2-Member: This entity represents the members who can register at the gymnasiums. It has attributes such as unique identifier, 
//last name, address, date of birth, and gender.
//Each member can register at one gymnasium, so the relationship between Gymnasium and Member is one-to-many.
//3-Session: This entity represents the sessions that are held at the gymnasiums. It has attributes such as type of sport and schedule.
//Each session can accommodate up to 20 members, so the relationship between Session and Member is many-to-many.
//4-Coach: This entity represents the coaches who lead the sessions. It has attributes such as last name, first name, age, and specialty. 
//Each session can be led by up to two coaches, so the relationship between Coach and Session is many-to-two.

//the relashionships of this ER model: 
//One-to-Many (1:N) relationship between Gymnasium and Member: Each gymnasium can have multiple members,
// but each member can only belong to one gymnasium.

//One-to-Many (1:N) relationship between Gymnasium and Session:
// Each gymnasium can have multiple sessions, but each session can only belong to one gymnasium.

//Many-to-One (N:1) relationship between Session and Gymnasium: 
//Each session can only belong to one gymnasium, but each gymnasium can have multiple sessions.

//Many-to-Many (N:M) relationship between Member and Session: 
//Each member can attend multiple sessions, and each session can have multiple members.

//One-to-Many (1:N) relationship between Coach and Session: 
//Each session can have up to two coaches, and each coach can only lead one or two sessions.

//Many-to-One (N:1) relationship between Session and Coach: 
//Each coach can lead multiple sessions, but each session can only have up to two coaches.


