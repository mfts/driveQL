import docIdToJson from '../libs/docIdToJson';

export default function(req, res) {
  const { id } = req.query;
  console.log('google doc id:', id);
  // return res.send({id:id});
  docIdToJson(id).then((data) => {
    res.send(data);
  });
}
