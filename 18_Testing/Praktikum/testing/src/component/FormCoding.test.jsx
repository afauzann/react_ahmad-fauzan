import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormCoding from "./FormCoding";
import '@testing-library/jest-dom/extend-expect';

describe("FormCoding", () => {
    test("renders FormCoding component", () => {
        render(<FormCoding/>)
        // screen.debug()
        expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument();
        expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
        expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
    })

    test("input text for nama dan harapan", () => {
        render(<FormCoding/>)
        // screen.debug()
        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}),
            {target: {value: "Budi Is"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}),
            {target: {value: "Budi@gmail.com"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /no handphone/i}),
            {target: {value: "089672612"}}
        )
        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Budi Is");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("Budi@gmail.com");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveValue("089672612");
    })

    test("input text for nama with number", () => {
        render(<FormCoding/>)
        // screen.debug()
        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}),
            {target: {value: "Budi Is4"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}),
            {target: {value: "aa2"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /no handphone/i}),
            {target: {value: "08967261"}}
        )
        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Budi Is4");
        expect(screen.getByLabelText(/Email/)).toHaveValue("aa2");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveValue("08967261");
        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument()
        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument()
        expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument()
    })

    test("submit button", () => {
        render(<FormCoding/>)
         // screen.debug()

         fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}),
            {target: {value: "Budi Is"}}
        )
        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Budi Is");

        fireEvent.click(screen.getByRole("button", {name: /submit/i}))

        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");

    })
})