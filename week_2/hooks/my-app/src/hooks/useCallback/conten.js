import { memo } from "react";

function Content({ onIncrease }) {
    console.log('Render lại component Content');
    return (
        <div>
            <h1>Content Component</h1>
            <button onClick={onIncrease}>Increase Count</button>
        </div>
    )
}
export default memo(Content);