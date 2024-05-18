import axios from "axios";
export const BASE_URL="http://localhost:4001/"
class ApiServices{
    getToken(){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return obj
    }

    login(data){
        return axios.post(BASE_URL+"api/user/login",data)
    }

    changePassword(data){
        return axios.post(BASE_URL+"api/user/changepassword",data,{headers: this.getToken()})
    }

    dashboard(data){
        return axios.post(BASE_URL+"api/dashboard",data,{headers: this.getToken()})
    }

    addDepartment(data){
        return axios.post(BASE_URL+"api/department/add",data,{headers: this.getToken()})
    }

    getDepartment(data){

        return axios.post(BASE_URL+"api/department/getall",data,{headers: this.getToken()})
    }
 
    singleDepartment(data){
        return axios.post(BASE_URL+"api/department/getsingle",data,{headers: this.getToken()})
    }

    updateDepartment(data){
        return axios.post(BASE_URL+"api/department/updatedata",data,{headers: this.getToken()})
    }
    softdeleteDepartment(data){
        return axios.post(BASE_URL+"api/department/softdelete",data,{headers: this.getToken()})
    }




    addCourse(data){
        return axios.post(BASE_URL+"api/course/add",data,{headers: this.getToken()})
    }

    getCourse(data){
        return axios.post(BASE_URL+"api/course/getall",data,{headers: this.getToken()})
    }

    singleCourse(data){
        return axios.post(BASE_URL+"api/course/getsingle",data,{headers: this.getToken()})
    }

    updateCourse(data){
        return axios.post(BASE_URL+"api/course/updatedata",data,{headers: this.getToken()})
    }

    softdeleteCourse(data){
        return axios.post(BASE_URL+"api/course/softdelete",data,{headers: this.getToken()})
    }



    addBranch(data){
        return axios.post(BASE_URL+"api/branch/add",data,{headers: this.getToken()})
    }

    getBranch(data){
        return axios.post(BASE_URL+"api/branch/getall",data,{headers: this.getToken()})
    }

    singleBranch(data){
        return axios.post(BASE_URL+"api/branch/getsingle",data,{headers: this.getToken()})
    }

    updateBranch(data){
        return axios.post(BASE_URL+"api/branch/updatedata",data,{headers: this.getToken()})
    }

    softdeleteBranch(data){
        return axios.post(BASE_URL+"api/branch/softdelete",data,{headers: this.getToken()})
    }



    addSubject(data){
        return axios.post(BASE_URL+"api/subject/add",data,{headers: this.getToken()})
    }

    getSubject(data){
        return axios.post(BASE_URL+"api/subject/getall",data,{headers: this.getToken()})
    }

    singleSubject(data){
        return axios.post(BASE_URL+"api/subject/getsingle",data,{headers: this.getToken()})
    }

    updateSubject(data){
        return axios.post(BASE_URL+"api/subject/updatedata",data,{headers: this.getToken()})
    }

    softdeleteSubject(data){
        return axios.post(BASE_URL+"api/subject/softdelete",data,{headers: this.getToken()})
    }



    assignSubject(data){
        return axios.post(BASE_URL+"api/assignsub/add",data,{headers: this.getToken()})
    }

    getAssignSubject(data){
        return axios.post(BASE_URL+"api/assignsub/getall",data,{headers: this.getToken()})
    }

    singleAssignSubject(data){
        return axios.post(BASE_URL+"api/assignsub/getsingle",data,{headers: this.getToken()})
    }

    updateAssignSubject(data){
        return axios.post(BASE_URL+"api/assignsub/updatedata",data,{headers: this.getToken()})
    }

    softdeleteAssignSubject(data){
        return axios.post(BASE_URL+"api/assignsub/softdelete",data,{headers: this.getToken()})
    }



    addStaff(data){
        return axios.post(BASE_URL+"api/user/register",data,{headers: this.getToken()})
    }

    getStaff(data){
        return axios.post(BASE_URL+"api/user/getallstaff",data,{headers: this.getToken()})
    }

    singleStaff(data){
        return axios.post(BASE_URL+"api/staff/getsingle",data,{headers: this.getToken()})
    }

    updateStaff(data){
        return axios.post(BASE_URL+"api/staff/updatedata",data,{headers: this.getToken()})
    }

    softdeleteStaff(data){
        return axios.post(BASE_URL+"api/staff/softdelete",data,{headers: this.getToken()})
    }



    addStudent(data){
        return axios.post(BASE_URL+"api/user/registerstudent",data,{headers: this.getToken()})
    }

    getStudent(data){
        return axios.post(BASE_URL+"api/user/getallstudent",data,{headers: this.getToken()})
    }

    singleStudent(data){
        return axios.post(BASE_URL+"api/student/getsingle",data,{headers: this.getToken()})
    }

    updateStudent(data){
        return axios.post(BASE_URL+"api/student/updatedata",data,{headers: this.getToken()})
    }

    softdeleteStudent(data){
        return axios.post(BASE_URL+"api/student/softdelete",data,{headers: this.getToken()})
    }



    addFeedback(data){
        return axios.post(BASE_URL+"api/feedback/add",data,{headers: this.getToken()})
    }

    getFeedback(data){
        return axios.post(BASE_URL+"api/feedback/getall",data,{headers: this.getToken()})
    }


    
    addAssignment(data){
        return axios.post(BASE_URL+"api/assignment/add",data,{headers: this.getToken()})
    }
    getAssignment(data){
        return axios.post(BASE_URL+"api/assignment/getall",data,{headers: this.getToken()})
    }
    singleAssignment(data){
        return axios.post(BASE_URL+"api/assignment/getsingle",data,{headers: this.getToken()})
    }
    updateAssignment(data){
        return axios.post(BASE_URL+"api/assignment/updatedata",data,{headers: this.getToken()})
    }
    softdeleteAssignment(data){
        return axios.post(BASE_URL+"api/assignment/softdelete",data,{headers: this.getToken()})
    }


    addMaterial(data){
        return axios.post(BASE_URL+"api/material/add",data,{headers: this.getToken()})
    }
    getMaterial(data){
        return axios.post(BASE_URL+"api/material/getall",data,{headers: this.getToken()})
    }
    getPagination(data){
        return axios.post(BASE_URL+"api/material/getpagination",data,{headers: this.getToken()})
    }
    singleMaterial(data){
        return axios.post(BASE_URL+"api/material/getsingle",data,{headers: this.getToken()})
    }
    updateMaterial(data){
        return axios.post(BASE_URL+"api/material/updatedata",data,{headers: this.getToken()})
    }
    softdeleteMaterial(data){
        return axios.post(BASE_URL+"api/material/softdelete",data,{headers: this.getToken()})
    }


    addMarks(data){
        return axios.post(BASE_URL+"api/marks/add",data,{headers: this.getToken()})
    }
    getMarks(data){
        return axios.post(BASE_URL+"api/marks/getall",data,{headers: this.getToken()})
    }
    updateMarks(data){
        return axios.post(BASE_URL+"api/marks/updatedata",data,{headers: this.getToken()})
    }


    addAnnouncement(data){
        return axios.post(BASE_URL+"api/announcement/add",data,{headers: this.getToken()})
    }
    getAnnouncement(data){
        return axios.post(BASE_URL+"api/announcement/getall",data,{headers: this.getToken()})
    }


    addMeetingLink(data){
        return axios.post(BASE_URL+"api/meeting/add",data,{headers: this.getToken()})
    }
    getMeeting(data){
        return axios.post(BASE_URL+"api/meeting/getall",data,{headers: this.getToken()})
    }
    
    
    uploadedAssignment(data){
        return axios.post(BASE_URL+"api/assignment/upload",data,{headers: this.getToken()})
    }
    getUploadAssignment(data){
        return axios.post(BASE_URL+"api/assignment/getallupload",data,{headers: this.getToken()})
    }
    singleUploadAssignment(data){
        return axios.post(BASE_URL+"api/assignment/getsingleupload",data,{headers: this.getToken()})
    }


}
export default new ApiServices;