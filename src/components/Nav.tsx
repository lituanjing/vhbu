import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/money.svg');
require('icons/tags.svg');
require('icons/statistics.svg');


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px 0;
      .icon {
        font-size: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#tags" />
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#statistics" />
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;