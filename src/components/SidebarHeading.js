import React from "react";

export default class SidebarHeading extends React.Component {
    render() {
        const { createNewListCallback, canAddList } = this.props;
        const handleClick = (event) => {
            createNewListCallback();
        };
        let addListButtonClass = "toolbar-button";
        if (!canAddList){
            addListButtonClass += "-disabled";
        }
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={addListButtonClass} 
                    onClick={handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}