/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
//const should = require('should');
//const fs = require('fs');
const  Marcxml = require('../lib/Marcxml');

const xml = `<?xml version="1.0"?>
<collection xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:marc="http://www.loc.gov/MARC21/slim" xsi:schemaLocation="http://www.loc.gov/MARC21/slim http://www.loc.gov/standards/marcxml/schema/MARC21slim.xsd">
  <record>
    <leader>00000nam a2200000 a 4500</leader>
    <controlfield tag="001">205237</controlfield>
    <controlfield tag="005">20200803014627.0</controlfield>
    <controlfield tag="008">091019s2010    nyua   c      000 1 eng  </controlfield>
    <datafield tag="010" ind1=" " ind2=" ">
      <subfield code="a">  2009039748</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9780810984257 (hbk.)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">0810984253 (hbk.)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9780810996502 (pbk.)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9781419715174</subfield>
      <subfield code="q">(rebound)</subfield>
    </datafield>
    <datafield tag="035" ind1=" " ind2=" ">
      <subfield code="a">(OCoLC)ocn430838790</subfield>
    </datafield>
    <datafield tag="035" ind1=" " ind2=" ">
      <subfield code="a">(OCoLC)430838790</subfield>
    </datafield>
    <datafield tag="040" ind1=" " ind2=" ">
      <subfield code="a">DLC</subfield>
      <subfield code="b">eng</subfield>
      <subfield code="e">rda</subfield>
      <subfield code="c">DLC</subfield>
      <subfield code="d">IG#</subfield>
      <subfield code="d">BTCTA</subfield>
      <subfield code="d">UKM</subfield>
      <subfield code="d">ABG</subfield>
      <subfield code="d">EHH</subfield>
      <subfield code="d">SMDRL</subfield>
    </datafield>
    <datafield tag="050" ind1="0" ind2="0">
      <subfield code="a">PZ7.A585</subfield>
      <subfield code="b">St 2010</subfield>
    </datafield>
    <datafield tag="082" ind1="0" ind2="0">
      <subfield code="a">[Fic]</subfield>
      <subfield code="2">22</subfield>
    </datafield>
    <datafield tag="092" ind1=" " ind2=" ">
      <subfield code="a">JF SERIES ORI</subfield>
    </datafield>
    <datafield tag="100" ind1="1" ind2=" ">
      <subfield code="a">Angleberger, Tom,</subfield>
      <subfield code="e">author.</subfield>
    </datafield>
    <datafield tag="245" ind1="1" ind2="4">
      <subfield code="a">The strange case of Origami Yoda /</subfield>
      <subfield code="c">Tom Angleberger.</subfield>
    </datafield>
    <datafield tag="260" ind1=" " ind2=" ">
      <subfield code="a">New York :</subfield>
      <subfield code="b">Amulet Books,</subfield>
      <subfield code="c">2010.</subfield>
    </datafield>
    <datafield tag="300" ind1=" " ind2=" ">
      <subfield code="a">141 p. :</subfield>
      <subfield code="b">ill. ;</subfield>
      <subfield code="c">22 cm.</subfield>
    </datafield>
    <datafield tag="490" ind1="0" ind2=" ">
      <subfield code="a">Origami Yoda ;</subfield>
      <subfield code="v">[1]</subfield>
    </datafield>
    <datafield tag="520" ind1=" " ind2=" ">
      <subfield code="a">Sixth-grader Tommy and his friends describe their interactions with a paper finger puppet of Yoda, worn by their weird classmate Dwight, as they try to figure out whether or not the puppet can really predict the future. Includes instructions for making Origami Yoda.</subfield>
    </datafield>
    <datafield tag="521" ind1="1" ind2=" ">
      <subfield code="a">009-012.</subfield>
    </datafield>
    <datafield tag="600" ind1="0" ind2="0">
      <subfield code="a">Yoda</subfield>
      <subfield code="c">(Fictitious character from Lucas)</subfield>
      <subfield code="v">Juvenile fiction.</subfield>
    </datafield>
    <datafield tag="650" ind1=" " ind2="0">
      <subfield code="a">Finger puppets</subfield>
      <subfield code="v">Juvenile fiction.</subfield>
    </datafield>
    <datafield tag="650" ind1=" " ind2="0">
      <subfield code="a">Origami</subfield>
      <subfield code="v">Juvenile fiction.</subfield>
    </datafield>
    <datafield tag="650" ind1=" " ind2="0">
      <subfield code="a">Eccentrics and eccentricities</subfield>
      <subfield code="v">Juvenile fiction.</subfield>
    </datafield>
    <datafield tag="650" ind1=" " ind2="0">
      <subfield code="a">Middle schools</subfield>
      <subfield code="v">Juvenile fiction.</subfield>
    </datafield>
    <datafield tag="650" ind1=" " ind2="0">
      <subfield code="a">Schools</subfield>
      <subfield code="v">Juvenile fiction.</subfield>
    </datafield>
    <datafield tag="596" ind1=" " ind2=" "/>
  </record>
</collection>`;

let res = Marcxml.parse(xml);
let data = JSON.parse(JSON.stringify(res));
console.log(data);


const xml2 = `<?xml version="1.0"?>
<collection xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:marc="http://www.loc.gov/MARC21/slim" xsi:schemaLocation="http://www.loc.gov/MARC21/slim http://www.loc.gov/standards/marcxml/schema/MARC21slim.xsd">
  <record>
    <leader>00000cam a2200000Ki 4500</leader>
    <controlfield tag="001">1045989</controlfield>
    <controlfield tag="005">20240105121735.0</controlfield>
    <controlfield tag="008">160201m20169999nyua   j 6    000 1 eng d</controlfield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9780545825016</subfield>
      <subfield code="q">v.1 : hardcover)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9780545929073</subfield>
      <subfield code="q">(v.1 paperback)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">0545825016</subfield>
      <subfield code="q">v.1 : hardcover)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9780545876841</subfield>
      <subfield code="q">v.2 : hardcover)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">0545876842</subfield>
      <subfield code="q">v.2 : hardcover)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9781338163841</subfield>
      <subfield code="q">v.2 : paperback)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9781338033120</subfield>
      <subfield code="q">v.3 : hardcover)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">1338033123</subfield>
      <subfield code="q">v.3 : hardcover)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">9781338273281</subfield>
      <subfield code="q">(v.4 ; hardcover)</subfield>
    </datafield>
    <datafield tag="020" ind1=" " ind2=" ">
      <subfield code="a">1338273280</subfield>
      <subfield code="q">(v.4 ; hardcover)</subfield>
    </datafield>
    <datafield tag="035" ind1=" " ind2=" ">
      <subfield code="a">(OCoLC)936340857</subfield>
      <subfield code="z">(OCoLC)933727354</subfield>
    </datafield>
    <datafield tag="035" ind1=" " ind2=" ">
      <subfield code="a">(OCoLC)ocn936340857</subfield>
    </datafield>
    <datafield tag="040" ind1=" " ind2=" ">
      <subfield code="a">SO$</subfield>
      <subfield code="b">eng</subfield>
      <subfield code="e">rda</subfield>
      <subfield code="c">SO$</subfield>
      <subfield code="d">OCLCF</subfield>
      <subfield code="d">QX9</subfield>
      <subfield code="d">CCP</subfield>
      <subfield code="d">OCLCA</subfield>
      <subfield code="d">QX9</subfield>
      <subfield code="d">SMDRL</subfield>
    </datafield>
    <datafield tag="082" ind1="0" ind2="4">
      <subfield code="a">741.5/973</subfield>
      <subfield code="2">23</subfield>
    </datafield>
    <datafield tag="092" ind1=" " ind2=" ">
      <subfield code="a">J GRAPHIC SEC</subfield>
    </datafield>
    <datafield tag="100" ind1="1" ind2=" ">
      <subfield code="a">Fridolfs, Derek,</subfield>
      <subfield code="e">author.</subfield>
    </datafield>
    <datafield tag="245" ind1="1" ind2="0">
      <subfield code="a">Secret hero society /</subfield>
      <subfield code="c">written by Derek Fridolfs ; illustrations by Dustin Nguyen.</subfield>
    </datafield>
    <datafield tag="246" ind1="1" ind2=" ">
      <subfield code="i">At head of title:</subfield>
      <subfield code="a">DC COMICS</subfield>
    </datafield>
    <datafield tag="264" ind1=" " ind2="1">
      <subfield code="a">New York :</subfield>
      <subfield code="b">Scholastic Inc.,</subfield>
      <subfield code="c">[2016]-</subfield>
    </datafield>
    <datafield tag="300" ind1=" " ind2=" ">
      <subfield code="a">volumes :</subfield>
      <subfield code="b">chiefly color illustrations ;</subfield>
      <subfield code="c">22 cm</subfield>
    </datafield>
    <datafield tag="336" ind1=" " ind2=" ">
      <subfield code="a">text</subfield>
      <subfield code="b">txt</subfield>
      <subfield code="2">rdacontent</subfield>
    </datafield>
    <datafield tag="336" ind1=" " ind2=" ">
      <subfield code="a">still image</subfield>
      <subfield code="b">sti</subfield>
      <subfield code="2">rdacontent</subfield>
    </datafield>
    <datafield tag="337" ind1=" " ind2=" ">
      <subfield code="a">unmediated</subfield>
      <subfield code="b">n</subfield>
      <subfield code="2">rdamedia</subfield>
    </datafield>
    <datafield tag="338" ind1=" " ind2=" ">
      <subfield code="a">volume</subfield>
      <subfield code="b">nc</subfield>
      <subfield code="2">rdacarrier</subfield>
    </datafield>
    <datafield tag="505" ind1="1" ind2="0">
      <subfield code="g">Volume 1.</subfield>
      <subfield code="t">Study hall of justice --</subfield>
      <subfield code="g">Volume 2.</subfield>
      <subfield code="t">Fort Solitude --</subfield>
      <subfield code="g">Volume 3.</subfield>
      <subfield code="t">Detention of Doom --</subfield>
      <subfield code="g">v.4.</subfield>
      <subfield code="t">Science fair crisis --</subfield>
      <subfield code="g">v.5.</subfield>
      <subfield code="t">Field trip disaster --</subfield>
    </datafield>
    <datafield tag="520" ind1=" " ind2=" ">
      <subfield code="a">"My name is Bruce Wayne, and I'm the new kid (UGH) at Ducard Academy. I can't say for certain, but I think something fishy's going on. There's a gang of clowns roaming the halls, a kid named Bane wants to beat me up, and the guidance counselor, Hugo Strange, seems really, well, strange. At least I have two new friends -- Clark and Diana are kinda cool, I guess. We're going to solve this case no matter what, even if I have to convince Alfred to let me stay up past eleven."--Back cover of Volume 1.</subfield>
    </datafield>
    <datafield tag="650" ind1=" " ind2="0">
      <subfield code="a">Superheroes</subfield>
      <subfield code="v">Comic books, strips, etc.</subfield>
    </datafield>
    <datafield tag="650" ind1=" " ind2="0">
      <subfield code="a">Supervillains</subfield>
      <subfield code="v">Comic books, strips, etc.</subfield>
    </datafield>
    <datafield tag="650" ind1=" " ind2="0">
      <subfield code="a">Middle schools</subfield>
      <subfield code="v">Comic books, strips, etc.</subfield>
    </datafield>
    <datafield tag="655" ind1=" " ind2="7">
      <subfield code="a">Graphic novels.</subfield>
      <subfield code="2">lcgft</subfield>
    </datafield>
    <datafield tag="700" ind1="1" ind2=" ">
      <subfield code="a">Nguyen, Dustin,</subfield>
      <subfield code="e">illustrator.</subfield>
    </datafield>
    <datafield tag="710" ind1="2" ind2=" ">
      <subfield code="a">DC Comics, Inc.</subfield>
    </datafield>
  </record>
</collection>
`

const res2 = Marcxml.parse(xml2);
console.log(res2);
