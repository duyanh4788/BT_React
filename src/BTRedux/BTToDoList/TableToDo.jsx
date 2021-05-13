import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux';
// action
import { doneToDo_Action, deleteTask_Action, editTask_Action } from '../../redux/action/Task_Action';
// Styled Component
import { Table, Th, Th2, Thead, Tr } from '../../Styled_Component/ToDoList_Component/Table';
import { Button } from '../../Styled_Component/ToDoList_Component/Button';


class TableToDo extends Component {
    renderEdit = (item) => {
        const { editTask } = this.props;
        editTask(item)
        document.getElementById('upDate').disabled = false
        document.getElementById('addTask').style.display = "none"
    }
    renderTaskToDo = () => {
        const { taskList, doneToDo, dellToDo } = this.props;
        return taskList.filter(task => task.done).map((item, index) => {
            return (
                <Tr key={index}>
                    <Th>{item.taskName}</Th>
                    <Th2>
                        <Button><i className='fa fa-edit' onClick={() => { this.renderEdit(item) }}></i></Button>
                        <Button><i className='fa fa-check' onClick={() => { doneToDo(item.done) }}></i></Button>
                        <Button><i className='fa fa-trash' onClick={() => { dellToDo(item.id) }}></i></Button>
                    </Th2>
                </Tr>
            )
        })
    }
    render() {
        console.log('TableToDo');
        return (
            <Table>
                <Thead>
                    {this.renderTaskToDo()}
                </Thead>
            </Table>
        )
    }
}

const mapStateToPops = state => {
    return {
        taskList: state.TaskListReducers.taskList,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doneToDo: (done) => {
            dispatch(doneToDo_Action(done))
        },
        dellToDo: (id) => {
            dispatch(deleteTask_Action(id))
        },
        editTask: (taskName) => {
            dispatch(editTask_Action(taskName))
        }
    }
}
export default connect(mapStateToPops, mapDispatchToProps)(TableToDo)