"use client";
import { Container, Text, Title, Rating, Group, Textarea, Button, Divider, Pagination } from "@mantine/core";
import Footer from "@components/Footer";
export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">Your rating</Title>
      <Rating size="lg"/>

      <Textarea
        label="Your review"
        size="sm"
        placeholder="Do you enjoy eating?"
        mt="sm"
        rows={3}
      />

      <Button
        mt="sm"
        color="orange"
        size="sm"
      >
      Submit Review
      </Button>

      <Group grow>
        <Divider my="sm"/>
      </Group>

      <Group justify="center">
        <Title order={4}>
          Elon Musk
          </Title>
        <Rating value={5} readOnly/>
      </Group>
      <Text c="dimmed" ta="center" fz="15">
        Best pizza in this world. I give you X score.
        </Text>

      <Group grow>
        <Divider my="sm"/>
      </Group>

      <Group justify="center">
        <Title order={4}>
          Mark Zuck
          </Title>
        <Rating value={4} readOnly/>
      </Group>
      <Text c="dimmed" ta="center" fz="15">
        My favourite part is pepperoni
        </Text>

      <Group justify="center">
        <Pagination
          boundaries={1}
          my="sm"
          total={20}
          color="orange"
        />
      </Group>
      <Text ta="center" my="sm">
      <Footer 
            year="2024"
            fullName="Supahloek Khueanphet"
            studentId="660610799"
          />
      </Text>
    </Container>
  );
}
