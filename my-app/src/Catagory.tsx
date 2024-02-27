import React, { MouseEvent, useRef, useState } from "react";
import styled from "styled-components";

// Styled component for the scrollable container
const ScrollContainer = styled.div`
  background-color: rgba(0, 0, 0, 1);
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
    imageUrl: "https://www.adameve.com/cms/image/676043-775633-1800x1800.jpg",
  },
  {
    id: 2,
    name: "Category 2",
    imageUrl:
      "https://www.fleshlight.com/cdn/shop/products/Textures_Classic-Variant-Lady-Original.png?v=1687884406&width=1946",
  },
  {
    id: 3,
    name: "Category 3",
    imageUrl: "https://d1o1wlqwda3y1b.cloudfront.net/MC/WTC423_1.jpg",
  },
  {
    id: 4,
    name: "Category 4",
    imageUrl:
      "https://www.viva-awa.com/image/cache/catalog/bt_product/3d-silicone-best-male-masturbator-half-body-masturbator-small-500x500.jpg",
  },
  {
    id: 5,
    name: "Category 5",
    imageUrl:
      "https://www.romp.toys/media/catalog/product/cache/35ddb396b26c34e27c9586d79f1518a3/r/o/romp_jazz_pdp_gallery_1000x1000_01.jpg?format=pjpg",
  },
  {
    id: 6,
    name: "Category 6",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/condom/k/d/l/-original-imagpx68hjymtqqq.jpeg?q=90&crop=false",
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
      {/* add a auto scroll */}
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
