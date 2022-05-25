import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from "react"
let dummyData = [
  { id: 0, content: 1 },
  { id: 1, content: 2 },
  { id: 2, content: 3 },
  { id: 3, content: 4 },
  { id: 4, content: 5 }
]
function App() {
  const [list, setList] = useState(dummyData)
  return (
    <div className="App">
      <div id='list'>
        <DragDropContext>
          <Droppable droppableId='vertical_list'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map(({ id, content }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index} >
                      {provided => (
                        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                          item {content}
                        </div>
                      )}
                    </Draggable>
                  )
                })}

              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
