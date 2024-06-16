const express = require('express'); 
const user = require('./user.js');
const app = express();
app.use(express.json());
const PORT = 3000;

const emp = "Employee2";
app.get('/',async (req, res) => {

   const data = await user.find({empID : emp});
   if(data)
   res.json(data);
   else
   res.send();
})


app.post('/', async (req, res) => {
    try {
        const { empID, skills } = req.body;
        const userobj = await user.findOne({ empID });
    
        if (userobj) {
          userobj.skills = skills;
          await userobj.save();
          res.send('User skills updated successfully');
        } else {
          const useradder = new user({
              empID : empID,
              skills : skills
          });
          useradder.save();
        }
      } catch (error) {
        res.status(500).send('Error updating user skills');
      }
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
