import { useEffect, useState } from "react";

//useEffect(callback)
//- gọi callback mỗi khi component được render
// - gọi lại callback mỗi khi có sự thay đổi về state hoặc props

//useEffect(callback, [])
// - chỉ gọi callback 1 lần sau khi component được render lần đầu tiên
// - tương đương với componentDidMount trong class component

// useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi
// - dùng toán tử so sánh (===) để kiểm tra sự thay đổi của deps


// callback sẽ được gọi sau khi component được render
// cleanup function sẽ được gọi trước khi component unmount hoặc trước khi callback được gọi lại (trừ lần gọi đầu tiên) 
const tabs = ['posts', 'photos', 'albums'];
function UseEffectHook() {
    const [title, setTitle] = useState('');

    // useEffect để fetch data từ API
    const [post, setPost] = useState([]);
    const [type, setType] = useState('posts');
   
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    },[type]);


    // useEffect để lắng nghe sự kiện scroll
    const [showGoToTop, setShowGoToTop] = useState(false);
    
    useEffect(() => {
        const handleScoll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        }
        window.addEventListener('scroll', handleScoll);
    }, []);

    // useEffect để lắng nghe sự kiện resize
    const [width, setWidth] = useState(window.innerWidth);
   
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }   
        window.addEventListener('resize', handleResize);

        // cleanup function 
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    // useEffect để tạo đồng hồ đếm ngược
    const [countDown, setCountDown] = useState(180);
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown((prevCountDown) => prevCountDown - 1);
        }, 1000);   
        // cleanup function
        return () => {
            clearInterval(timerId);
        }
    }, []);

    const [file, setFile] = useState();
    useEffect(() => {
        // cleanup function để hủy URL khi component unmount hoặc file thay đổi
        return () => {
            file && URL.revokeObjectURL(file.preview);
        }
    }, [file]);
    
    const handlePreviewFile = (e) => { 
        
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        console.log(file);
        setFile(file);
    }


    return (
        <div className="App" style={{padding: 20}}>
            <input
                type="file"
                onChange={handlePreviewFile}
            />
            {file && (
                <div>
                    <img src={file.preview} alt="preview" width="80%" />
                </div>
            )}
            <h1>Count down: {countDown} seconds</h1>
            <h1>Window width: {width}px</h1>
            {tabs.map((tab) => (
                <button 
                    key={tab}
                    style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {post.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

            {showGoToTop && (
                <button 
                    style={{position: 'fixed', right: 20, bottom: 20}} 
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                    Go to top
                </button>
            )}
        </div>
        
    )

    // const [title, setTitle] = useState('');
    // const [post, setPost] = useState([]);
    
    //useEffect(callback, [])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => response.json())
    //     .then((data) => setPost(data));
    // },[]);
    // return (
    //     <div className="App" style={{padding: 20}}>
            
    //         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    //         <ul>
    //             {post.map((item) => (
    //                 <li key={item.id}>{item.title}</li>
    //             ))}
    //         </ul>
    //     </div>
        
    // )
}
export default UseEffectHook;