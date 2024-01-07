import React from 'react'

const Table = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Checkbox</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Date Created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>true</td>
                    <td>Lorem, ipsum dolor.</td>
                    <td>Done</td>
                    <td>22-05-2024</td>
                    <td>Actions</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table