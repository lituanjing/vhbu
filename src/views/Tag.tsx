import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
`;


const Tag: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
        <Input label="标签名" placeholder="在这里添加标签名"/>
      </div>
      <div>{tag.name}</div>
      <Button>删除标签</Button>
    </Layout>
  );
};

export {Tag};
