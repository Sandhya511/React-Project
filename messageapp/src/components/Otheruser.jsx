import React from 'react';

const getOtherUser = (chat, username) => {
  const otherMember = chat.people.find(
    (member) => member.person.username !== username
  );
  return otherMember?.person;
};

export default getOtherUser;
