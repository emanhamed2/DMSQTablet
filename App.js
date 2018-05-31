import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation'
import Login from './login'
import Reset from './Reset'
import EnterPass from './EnterPass'
import NavInstructor from './NavInstructor'
import NavStudent from './NavStudent'
// import Chat from './Chat'
import AdminRegister from './AdminRegister'
import FacultyList from './FacultyList'
import AdminProfile from './AdminProfile'
import InstructorGradePage from './InstructorGradePage'
import InstructorExam from './InstructorExam'
import Instructor from './Instructor'
// import StudentExam from './StudentExam'
import ForgotPassword from './ForgotPassword'
import InstructorProfile from './InstructorProfile'
import StudentProfile from './StudentProfile'
import Instructor_Homepage from './Instructor_Homepage'
import Student_Homepage from './Student_Homepage'
import createReactClass from 'create-react-class'
// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Login/>
//         {/* <Text>Test it</Text> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const RootStack = createStackNavigator(
  {
    Login: { screen: Login },
    AdminRegister: { screen: AdminRegister },
     ForgotPassword: { screen: ForgotPassword },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null,
    },
    // navigationOptions: {
    //   headerStyle: { backgroundColor: 'purple' },
    //   headerTintColor: 'black',
    //   headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
    // }
  },

)

const App = createReactClass({
  render() {
    return <RootStack />
    //  <Router>
    //   <div>
    //     <Route exact path="/" component={Login} />
    //     <Route path="/login" component={Login} />
    //     {/* <Route path="/forgot" component={ForgotPassword} />
    //     <Route path="/register" component={Register} />
    //     <Route path="/reset/:id/:key" component={ResetPassword} />
    //     <Route path="/questions" component={Questions.Create} />
    //     <Route path="/allquestions" component={Questions.All} />
    //     <Route path="/allcourses" component={Courses.All} />
    //     <Route path="/createcourse" component={Courses.Create} />
    //     <Route path="/documents2/:id" component={Documents2.Details} />
    //     <Route exact path="/documents/create" component={Documents.Create} />
    //     <Route exact path="/documents/:id" component={EditDocument} />
    //     <Route exact path="/cheerio/:id" component={CheerioTest} />
    //     <Route path="/enroll" component={Students.Enroll} />
    //     <Route path="/studenthome" component={Students.Home} />
    //     <Route path="/exams/:id" component={Exams.Details} />
    //     <Route path="/instructors" component={Instructors} />
    //     {/* <Route path="/Contacts" component={Contacts.All} />
    //     <Route path="/AddContacts" component={Contacts.Create} /> */}
    //     {/* <Route path="/Messages" component={Messages.All} /> 
    //     <Route path="/Groups" component={Contacts.Groups} />
    //     <Route path="/Contacts" component={Contacts.Single} />
    //     <Route path="/Messages/:id" component={Messages.Single} />
    //     <Route path="/GroupMessages/:id" component={Messages.Group} /> */}

    //   </div>
    // </Router>
  },
})

export default App