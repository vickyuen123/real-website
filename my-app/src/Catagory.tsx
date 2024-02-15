import React, { MouseEvent, useRef, useState } from "react";
import styled from "styled-components";

// Styled component for the scrollable container
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
  cursor: grab;
  user-select: none;
  scrollbar-width: thin;
  &:active {
    cursor: grabbing;
  }
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 4px;
  }
`;

// Styled component for each category item
const CategoryItem = styled.button`
  flex: 0 0 auto; // Prevents items from stretching
  border: none;
  background: transparent;
  width: 200px; // Fixed width for each category item
  text-align: center;
`;

// Sample data for category items (replace with your own data)
const categories = [
  {
    id: 1,
    name: "Category 1",
    imageUrl:
      "https://i.pinimg.com/originals/cf/db/fd/cfdbfdb3e265745f91d651ace516dce0.gif",
  },
  {
    id: 2,
    name: "Category 2",
    imageUrl:
      "https://gifdb.com/images/high/spongebob-kiss-my-sponge-jj8sfknlmk53cazv.gif",
  },
  {
    id: 3,
    name: "Category 3",
    imageUrl:
      "https://i.pinimg.com/originals/cf/db/fd/cfdbfdb3e265745f91d651ace516dce0.gif",
  },
  {
    id: 4,
    name: "Category 4",
    imageUrl:
      "https://gifdb.com/images/high/spongebob-kiss-my-sponge-jj8sfknlmk53cazv.gif",
  },
  {
    id: 5,
    name: "Category 5",
    imageUrl:
      "https://i.pinimg.com/originals/cf/db/fd/cfdbfdb3e265745f91d651ace516dce0.gif",
  },
  {
    id: 6,
    name: "Category 6",
    imageUrl:
      "https://gifdb.com/images/high/spongebob-kiss-my-sponge-jj8sfknlmk53cazv.gif",
  },
  {
    id: 7,
    name: "Category 7",
    imageUrl:
      "https://i.pinimg.com/originals/cf/db/fd/cfdbfdb3e265745f91d651ace516dce0.gif",
  },
  {
    id: 8,
    name: "Category 8",
    imageUrl:
      "https://gifdb.com/images/high/spongebob-kiss-my-sponge-jj8sfknlmk53cazv.gif",
  },
  {
    id: 9,
    name: "Category 9",
    imageUrl:
      "https://i.pinimg.com/originals/cf/db/fd/cfdbfdb3e265745f91d651ace516dce0.gif",
  },
  {
    id: 10,
    name: "Category 10",
    imageUrl:
      "https://gifdb.com/images/high/spongebob-kiss-my-sponge-jj8sfknlmk53cazv.gif",
  },
  {
    id: 11,
    name: "Category 11",
    imageUrl:
      "https://i.pinimg.com/originals/cf/db/fd/cfdbfdb3e265745f91d651ace516dce0.gif",
  },
  {
    id: 12,
    name: "Category 12",
    imageUrl:
      "https://gifdb.com/images/high/spongebob-kiss-my-sponge-jj8sfknlmk53cazv.gif",
  },
  // Add more categories as needed
];

const Catagory = () => {
  // const scrollRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // Use optional chaining and nullish coalescing operator to handle possible null values
    const currentOffsetLeft = scrollRef.current?.offsetLeft ?? 0;
    setStartX(e.clientX - currentOffsetLeft);
    const currentScrollLeft = scrollRef.current?.scrollLeft ?? 0;
    setScrollLeft(currentScrollLeft);
  };

  const stopDragging = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const onDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    // Use optional chaining to safely access properties
    const x = e.clientX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 2;
    // Only proceed if scrollRef.current is not null
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <ScrollContainer
      ref={scrollRef}
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={onDrag}
    >
      {categories.map((category) => (
        <CategoryItem key={category.id}>
          <img
            src={category.imageUrl}
            alt={category.name}
            style={{ width: "100%", height: "auto" }}
          />
          <p>{category.name}</p>
        </CategoryItem>
      ))}
    </ScrollContainer>
  );
};

export default Catagory;
