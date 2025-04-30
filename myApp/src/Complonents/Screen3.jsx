function Screen3()
{
return (

<div border="4" align="center">
    <br />
    <br />
  <br/>
  
    <form>
        <table border="1">
<tr align="center"><h4>Edit task</h4></tr>            <tr>
                <td><label htmlFor="">Assigned to</label> <input type="text" placeholder="* User1" /></td>
                <td><label htmlFor="">Status</label><input type="text" placeholder="*Not Started"/>
                </td>
            </tr>
            <tr>
                <td><label htmlFor="">Due Date</label> <input type="date" placeholder="* 12 May 2016" /></td>

                <td><label htmlFor="">Priority</label><input type="text" placeholder="*Normal"/>
                </td>
            </tr>
            <tr >
              Description
              <textarea name="" id="" cols="30" rows="3"></textarea>
            </tr>
            <tr><td border="0"><button>Cancel</button></td>
            <td><button>Save</button></td>
            </tr>
        </table>
    </form>

</div>
)
}
export default Screen3;