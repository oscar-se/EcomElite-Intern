import { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'NodeJS'
    },
    {
        id: 3,
        name: 'JavaScript'
    }
];

function ChatApp() {
    const [lessonId, setLessonId] = useState(1);
    
    useEffect(() => {
        const handleLesson = ({detail}) => {
            console.log(detail);
            if (detail.id === lessonId) {
                alert(`Bài học hiện tại: ${detail.name}`);
            }  
        }
        const eventName = `lesson-${lessonId}`;
        window.addEventListener(eventName, handleLesson);

        return () => {
            window.removeEventListener(eventName, handleLesson);
        }
    }, [lessonId]);
    return (
        <div className="App" style={{padding: 20}}>
            <h1>Chat App</h1>
            <ul>    
                {lessons.map((lesson) => (
                    <li 
                        key={lesson.id} 
                        style={lessonId === lesson.id ? { color: '#fff', backgroundColor: '#333' } : {}}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>   
                ))}
            </ul>
        </div>
    );

}

export default ChatApp;