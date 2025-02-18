import { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Accordion = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [singleExpand, setSingleExpand] = useState(true); // 新增狀態來控制展開方式
  const items = [
    {
      id: "A",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "B",
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "C",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];

  const handleClick = (id) => {
    if (singleExpand) {
      setExpandedItems({
        [id]: !expandedItems[id],
      });
    } else {
      setExpandedItems({
        ...expandedItems,
        [id]: !expandedItems[id],
      });
    }
  };
  console.log(expandedItems)
  return (
    <div className='border-x border-t rounded'>
      <div className="flex justify-end p-3">
        <button
          className="mr-2 p-2 bg-blue-500 text-white rounded"
          onClick={() => setSingleExpand(true)}
        >
          單一展開
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setSingleExpand(false)}
        >
          多重展開
        </button>
      </div>
      {
        items.map((item) => {
          const isExpanded = expandedItems[item.id];
          return (
            <div key={item.id}>
              <div
                className="flex justify-between p-3 bg-gray-500 border-b item-center cursor-pointer"
                onClick={() => handleClick(item.id)}
              >
                {item.label}
                <span className="text-3xl">
                  {isExpanded ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
                </span>
              </div>
              {isExpanded && <div className='border-x border-t rounded'>{item.content}</div>}
            </div>
          )
        })
      }
    </div>
  )
}

export default Accordion;