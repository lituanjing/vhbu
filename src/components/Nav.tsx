import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25); line-height: 24px; background:#fff;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 8px 0;
        .icon {
          font-size: 24px;
        }
        &.selected {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;