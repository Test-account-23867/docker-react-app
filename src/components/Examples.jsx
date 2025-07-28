import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedItem) {
        setSelectedTopic(selectedItem);
        //console.log(selectedTopic);
    }

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Component</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
            </menu>
            {!selectedTopic ? <p>Please select an item</p> : null}
            {selectedTopic ? <TabContent {...EXAMPLES[selectedTopic]} /> : null}
        </section>
    );
}