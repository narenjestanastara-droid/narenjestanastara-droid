def calculate_installment(total_amount, months, interest_rate=0):
    """
    Calculate monthly installment for purchases.
    """
    total_with_interest = total_amount + (total_amount * interest_rate / 100)
    monthly_payment = total_with_interest / months
    return round(monthly_payment, 2)

# Example usage:
if __name__ == "__main__":
    amount = 50000000  # 50 million Rials
    months = 10
    print(f"Total Amount: {amount}")
    print(f"Months: {months}")
    print(f"Monthly Installment: {calculate_installment(amount, months)}")
