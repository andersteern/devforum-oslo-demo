import React, { Component } from 'react';
import { Hero } from './components/Hero/index'
import { Spacing } from './components/Spacing/index'
import { Paragraph } from './components/Paragraph/index'
import { Button } from './components/Button/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero><span>I’ll <i>never</i> turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.</span></Hero>

        <Spacing>
          <Paragraph>Lucas ipsum dolor sit amet danni ansuroer natasi dagobah trianii solo wilhuff gank nahdar jek. Khai jettster zev amedda oola terrik moff. Even whill shmi raynar firmus askajian. Darth qrygg jabba medon yoda ahsoka k-3po rebo. Unduli calamari croke tarasin x2. Bel yowza ulic owen coruscant ahsoka rom. Omas solo ulic jettster kaminoan abrion bail ti stass. Tavion roan nomi vader ki-adi-mundi barriss typho. Ishi ugnaught roos panaka kathol unduli muunilinst xappyh. Mimbanite sidious ugnaught wat ebe vader ssi-ruuk obi-wan t'landa.</Paragraph>
          <Paragraph>Kathol tarasin jobal maul boba. Mas winter verpine durge droid c-3p0 er'kit. Juvex aka jarael senesca tyber biggs kitonak. Iridonian lumiya ric keshiri. Mirax brak porkins antemeridian shado. Dagobah palpatine lars ackbar joh stass irek rishi ben. Illum borvo anomid pa'lowick oppo onimi. Darth x2 ki-adi-mundi endor jade cb-99 kamino massassi. Walon skakoan bothan atrivis. Orrin codru-ji wyl jax. Fey'lya fode rieekan saesee keyan d8 ubese. Ahsoka b4-d4 massa jamillia iv kohl dantooine. Jagged ssi-ruuk ors thrawn adi mantell haruun kit kal.</Paragraph>
          <Paragraph>Yuzzem darth sulorine voxyn mon mara gunray disra. Quinlan bardan jade polis rendar tagge. Luke typho rukh thrella. Thrella saché palpatine leia lando. Lars padmé dagobah hutt luke sifo-dyas letaki orus utapau. Chommell sing quadrinaros mustafar luuke roos naberrie. Leia farlander shado stass ulic. Amanin umbaran lahara vima-da-boda dak geonosian anx. Jusik chommell hutta maximilian. Raioballo shawda gerb falleen quadrinaros lobot. Sing khai asajj arvel droopy soontir rishi. Maximilian lyn fisto klaatu.</Paragraph>
          <Paragraph>Bib solo ubese chagrian vong fel jaina maarek. Oppo padmé kael thrawn y'bith endor. Raymus chadra-fan hutt croke. Vader askajian sulorine lando unu galen piell ooryl theelin. Shadda tambor y'bith iv dormé allana boz ponda. Luke clawdite var nahdar neimoidia. Tib axmis aqualish ruwee tarasin organa muun. Calamari bando desolous zam bith wilhuff oswaft max thisspiasian. Tib sly kathol vong tibor. Jettster amanin ithorian vratix tyber yaka kyle. Iktotchi tapani tarkin tatooine md-5 kast dooku wol.</Paragraph>
          <Paragraph>Fosh shimrra sith dagobah anakin sabé. Tc-14 dengar darth chazrach ubese. Nar soontir qrygg mod tano irek ansion xappyh saché. Jacen braxant yaddle trandoshan -lom moff croke obi-wan. Lorth frozarns thrawn vong habassa iblis palpatine palpatine darth. Tython san moore bormea. Skirata arkanian hutta noghri x1 latter. Anakin porkins gizka wol wicket nikto fisto billaba qu. Mohc ventress leia hapan twi'lek castell. Aurra sy moff vao dexter kobok r4-p17 organa sal-solo. Coruscant kwa cognus jin'ha ewok darth.</Paragraph>
          <Button>The Force will be with you. Always!</Button>
        </Spacing>
      </div>
    );
  }
}

export default App;
