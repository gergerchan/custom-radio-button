import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const Radio = ({ radioData, radioTitle }) => {
  const [radio, setRadio] = useState('');
  const [input, setInput] = useState('');
  return (
    <FormGroup tag='fieldset'>
      <legend>{radioTitle || 'Radio Button'}</legend>
      <FormGroup check>
        <Input
          name='radio1'
          type='radio'
          value={input}
          onChange={(e) => setRadio(e.target.value)}
        />{' '}
        <Input
          id='text'
          name='text'
          placeholder='input here'
          type='text'
          onChange={(e) => setInput(e.target.value)}
        />
      </FormGroup>
      <FormGroup check>
        <Input
          name='radio1'
          type='radio'
          value={input}
          onChange={(e) => setRadio(e.target.value)}
        />{' '}
        <FormGroup tag='fieldset'>
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Input
              name='radio2'
              type='radio'
              value='b'
              onChange={(e) => setRadio(e.target.value)}
            />{' '}
            <Label check>
              Option two can be something else and selecting it will deselect
              option one
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name='radio2'
              type='radio'
              value='b'
              onChange={(e) => setRadio(e.target.value)}
            />{' '}
            <Label check>
              Option two can be something else and selecting it will deselect
              option one
            </Label>
          </FormGroup>
        </FormGroup>
      </FormGroup>
      {radioData &&
        radioData.map((item) => (
          <div key={item.value}>
            <FormGroup check>
              <Input
                name='radio1'
                type='radio'
                value={item.value}
                onChange={(e) => setRadio(e.target.value)}
              />{' '}
              {item.sub ? (
                <FormGroup tag='fieldset'>
                  <legend>Subcomponent</legend>
                  {item.sub.map((itemsub) => (
                    <FormGroup check key={itemsub.key}>
                      <Input
                        name='radio2'
                        type='radio'
                        value={itemsub.value}
                        onChange={(e) => setRadio(e.target.value)}
                      />{' '}
                      {itemsub.type ? (
                        <Input
                          id='text'
                          name='text'
                          placeholder='input here'
                          type={itemsub.type}
                          onChange={(e) => setInput(e.target.value)}
                        />
                      ) : (
                        <Label check>{itemsub.label}</Label>
                      )}
                    </FormGroup>
                  ))}
                </FormGroup>
              ) : (
                <Label check>{item.label}</Label>
              )}
            </FormGroup>
          </div>
        ))}
    </FormGroup>
  );
};

export default Radio;
