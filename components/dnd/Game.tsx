"use client";
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Define your Word and Category interfaces
interface Word {
  id: string;
  content: string;
}

interface Category {
  id: string;
  title: string;
  words: Word[]; // Array of words in the category
}

// Define a mapping of words to their correct categories
const correctCategorizations: Record<string, string> = {
  'Hello': 'Greeting',
  'Blue': 'Colors',
  // ... add mappings for all words and their correct categories
};

// DraggableWord Component
const DraggableWord: React.FC<Word & { index: number }> = ({ id, content, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="cursor-pointer border border-gray-300 bg-white p-2 m-1 rounded inline-block"
        >
          {content}
        </div>
      )}
    </Draggable>
  );
};


// DroppableCategory Component
const DroppableCategory: React.FC<Category> = ({ id, title, words }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="border-2 border-dashed border-gray-400 bg-gray-100 p-4 m-2 rounded"
        >
          <p className="font-bold mb-2">{title}</p>
          <div>
            {words.map((word, index) => (
              <DraggableWord key={word.id} index={index} {...word} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const Game: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [words, setWords] = useState<Word[]>([
    { id: 'word1', content: 'Hello' },
    { id: 'word2', content: 'Blue' },
    // ... more words
  ]);

  const [categories, setCategories] = useState<Category[]>([
    { id: 'category1', title: 'Greeting', words: [] },
    { id: 'category2', title: 'Colors', words: [] },
    // ... more categories
  ]);

  // Function to handle drag end event
  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    // Dropped in the same list as it was dragged from
    if (source.droppableId === destination.droppableId) {
      return;
    }

    // Find the word
    const word = words.find((w) => w.id === result.draggableId);
    if (word) {
      // Check if dropped in the correct category
      const correctCategory = correctCategorizations[word.content];
      if (destination.droppableId === correctCategory) {
        // Handle correct categorization
        console.log(`Correct! ${word.content} was placed in ${correctCategory}`);
      } else {
        // Handle incorrect categorization
        console.log(`Incorrect. ${word.content} does not belong in ${destination.droppableId}`);
      }

      // Update categories
      setCategories((prevCategories) => {
        const newCategories = prevCategories.map((category) => {
          if (category.id === destination.droppableId) {
            return { ...category, words: [...category.words, word] };
          }
          return category;
        });
        return newCategories;
      });

      // Remove the word from the main list
      setWords((prevWords) => prevWords.filter((w) => w.id !== word.id));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {isClient && (
        <div className="game">
        {/* Draggable Words */}
        <Droppable droppableId="wordsList" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="words flex flex-row justify-center flex-wrap p-4"
            >
              {words.map((word, index) => (
                <DraggableWord key={word.id} index={index} {...word} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Droppable Categories */}
        <div className="categories flex flex-wrap justify-center">
          {categories.map((category) => (
            <DroppableCategory key={category.id} {...category} />
          ))}
        </div>
        </div>
      )}
    </DragDropContext> 
  );
};

export default Game;
