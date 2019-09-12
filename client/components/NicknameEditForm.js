import React from 'react';

const NicknameEditForm = () => {
  return (
    <div>
      <Form style={{ marginBottom: 20, padding: 20 }}>
        <Input addonBefore="nickname" />
        <Button type="primary" style={{ marginBottom: 30 }}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default NicknameEditForm;
