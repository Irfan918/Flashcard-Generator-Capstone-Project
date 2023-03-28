export const getMyflashCards = () => {
    if (!localStorage["MyFlashCard"]) {
      localStorage["MyFlashCard"] = "[]";
    }
  
    let MyFlashCard = localStorage["MyFlashCard"];
    MyFlashCard = JSON.parse(MyFlashCard);
    return MyFlashCard;
  };
  
  // Selecting card using id
  export const getMyflashCardById = (id) => {
    const MyFCard = getMyflashCards();
    const myCard = MyFCard.find((myCard) => myCard.id === id);
    return myCard;
  };
  
  //detecting card with unique id.
  export const deleteFlashCardById = (index) => {
    let MyFCard = getMyflashCards();
    MyFCard.splice(index, 1);
    localStorage.setItem("MyFlashCard", JSON.stringify(MyFCard));
    //auto refresh.
    window.location.reload();
  };