import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getByProductId(id).then((result) => {
      setProduct(result.data);
      console.log(result.data);
    });
  }, []);

  return (
    <Card.Group>
      <Card fluid>
        <CardContent>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/steve.jpg"
          />
          <CardHeader>{product.title}</CardHeader>
          <CardMeta>{product.category}</CardMeta>
          <CardDescription>
            Steve wants to add you to the group <strong>best friends</strong>
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </Card.Group>
  );
}
