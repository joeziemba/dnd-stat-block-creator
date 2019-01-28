import React from 'react';
import { Input, Row, InputFlat, Features } from './index'
import SelectField from './SelectField';
import Column from './Column';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import Accordian from './Accordian';
import Actions from './Actions';

class StatBlockForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAbilityFields() {
    return Object.keys(this.props.stats.abilities).map(ability => {
      return (
        <Column stackSize='small' key={ability}>
          <SelectField
            label={ability.toUpperCase()}
            options={global.array120}
            value={this.props.stats.abilities[ability]}
            fieldName={ability}
            onChange={(e) => this.props.updateAbility(ability, e.target.value)}
            center
          />
        </Column>
      )
    })
  }

  render() {
    return (
      <div id="StatBlockForm">
        <Accordian title="Basic Details">
          <Input
            type='text'
            label={'Name'}
            placeholder={'Creature Name'}
            value={this.props.stats.name}
            fieldName='name'
            onChange={this.props.updateState}
          />

          <Row>
            <Column stackSize='small'>
              <SelectField
                label={'Size'}
                options={['Small', 'Medium', 'Large', 'Huge', 'Giant']}
                value={this.props.stats.size}
                fieldName='size'
                onChange={this.props.updateState}
              />
            </Column>
            <Column stackSize='small'>
              <SelectField
                label={'Creature Type'}
                options={global.creatureTypes}
                value={this.props.stats.creatureType}
                onChange={this.props.updateState}
                fieldName='creatureType'
              />
            </Column>
            <Column stackSize='small'>
              <Input
                type='number'
                label={'Proficiency Bonus'}
                placeholder={''}
                value={this.props.stats.proficiency}
                fieldName='proficiency'
                onChange={this.props.updateState}
              />
            </Column>
          </Row>

          <Row>
            <Column>
              <h4 className='form-header'>Armor Class</h4>
              <Row>
                <Column stackSize='small'>
                  <Input
                    label={'Score'}
                    placeholder={''}
                    value={this.props.stats.ac.score}
                    fieldName='score'
                    onChange={this.props.updateAC}
                    type='number'
                  />
                  <Input
                    type='text'
                    label={'Support'}
                    placeholder={''}
                    value={this.props.stats.ac.support}
                    fieldName='support'
                    onChange={this.props.updateAC}
                  />
                </Column>
              </Row>
            </Column>
            <Column>
              <h4 className='form-header'>Hit Points</h4>
              <Row>
                <Column stackSize='small'>
                  <SelectField
                    label={'Hit Die'}
                    options={[4, 6, 8, 10, 12]}
                    value={this.props.stats.hp.hitDie}
                    fieldName='hitDie'
                    onChange={this.props.updateHP}
                  />
                  <Input
                    type='number'
                    label={'Number of Dice'}
                    placeholder={''}
                    value={this.props.stats.hp.dieNum}
                    fieldName='dieNum'
                    onChange={this.props.updateHP}
                  />
                </Column>
              </Row>
            </Column>
            <Column>
              <h4 className='form-header'>Speed</h4>
              <Input
                type='number'
                label={'Base Speed'}
                placeholder={''}
                value={this.props.stats.speed}
                fieldName='speed'
                onChange={this.props.updateState}
              />
              <Row>
                <Column>
                  <Input
                    type='number'
                    label={'Fly'}
                    placeholder={''}
                    value={this.props.stats.flySpeed}
                    fieldName='flySpeed'
                    onChange={this.props.updateState}
                  />
                </Column>
                <Column>
                  <Input
                    type='number'
                    label={'Swim'}
                    placeholder={''}
                    value={this.props.stats.swimSpeed}
                    fieldName='swimSpeed'
                    onChange={this.props.updateState}
                  />
                </Column>
              </Row>
            </Column>
          </Row>
        </Accordian>
        <Accordian title="Ability Scores">
          <Row>
            {this.renderAbilityFields()}
          </Row>
        </Accordian>
        <Accordian title="Properties">
          <div className="feature-block">
            <label>Immunities</label>
            <Typeahead
              multiple
              options={global.damageTypes}
              selected={this.props.stats.immune}
              onChange={(selected) => this.props.updatePropertyList(selected, 'immune')}
            />
          </div>
          <div className="feature-block">
            <label>Resistences</label>
            <Typeahead
              multiple
              options={global.damageTypes}
              selected={this.props.stats.resists}
              onChange={(selected) => this.props.updatePropertyList(selected, 'resists')}
            />
          </div>
          <div className="feature-block">
            <label>Vulnerabilities</label>
            <Typeahead
              multiple
              options={global.damageTypes}
              selected={this.props.stats.vulnerable}
              onChange={(selected) => this.props.updatePropertyList(selected, 'vulnerable')}
            />
          </div>
          <div className="feature-block">
            <label>Skill Proficiencies</label>
            <Typeahead
              multiple
              options={global.skills.map(skill => skill.name)}
              selected={this.props.stats.skills}
              onChange={(selected) => this.props.updatePropertyList(selected, 'skills')}
            />
          </div>
          <div className="feature-block">

          <label>Languages</label>
          <Typeahead
            multiple
            options={global.languages}
            selected={this.props.stats.langs}
            onChange={(selected) => this.props.updatePropertyList(selected, 'langs')}
          />
          </div>
        </Accordian>

        <Accordian title="Features">
          <Features
            features={this.props.stats.features}
            addFeature={this.props.addFeature}
            updateFeature={this.props.updateFeature}
          />
        </Accordian>

        <Accordian title="Actions">
          <Actions
            actions={this.props.stats.actions}
            addAction={this.props.addAction}
            updateAction={this.props.updateAction}
          />
        </Accordian>

      </div>
    )
  }
}

export default StatBlockForm;