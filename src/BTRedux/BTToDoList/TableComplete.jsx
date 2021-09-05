import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux';
// action
import { doneComplte_Action, deleteTask_Action } from '../../redux/action/Task_Action'
// Styled Component
import { Table, Tbody, Th, Th2, Tr } from '../../Styled_Component/ToDoList_Component/Table';
import { Button } from '../../Styled_Component/ToDoList_Component/Button';

class TableComplete extends Component {
    renderTaskComplete = () => {
        const { taskList, doneComplte, dellToDo } = this.props;
        return taskList.filter(task => !task.done).map((item, index) => {
            return (
                <Tr key={index}>
                    <Th>{item.taskName}</Th>
                    <Th2>
                        <Button onClick={() => { doneComplte(item.done) }}><i className='fa fa-check' ></i></Button>
                        <Button onClick={() => { dellToDo(item.id) }}><i className='fa fa-trash'></i></Button>
                    </Th2>
                </Tr>
            )
        })
    }
    render() {
        return (
            <Table>
                <Tbody>
                    {this.renderTaskComplete()}
                </Tbody>
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
        doneComplte: (done) => {
            dispatch(doneComplte_Action(done))
        },
        dellToDo: (id) => {
            dispatch(deleteTask_Action(id))
        },
    }
}
export default connect(mapStateToPops, mapDispatchToProps)(TableComplete)
